import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import { Chart } from "react-google-charts";

const StyledMovieDetails = styled.div`
  padding: calc(82px + 10%) 7% 0 160px;
  position: relative;
  .movie-info {
    background: #181f36;
    min-height: 800px;
    padding: 15px 15px 15px 20%;
    text-align: center;
    color: #fff;

    div:first-of-type {
      margin: 15px 0;
    }
    img {
      position: absolute;
      top: 250px;
      left: 40px;
      width: 300px;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 0rem;
      letter-spacing: 1px;
    }
    a {
      font-size: 1.3rem;
      text-transform: lowercase;
      color: #4b73ff;
    }
    p {
      max-width: 700px;
    }
    .pie-chart {
      background: ${props => props.theme.mainColor};
    }
    .genres {
      display: flex;
      justify-content: space-around;
      list-style-type: none;

      li {
        padding: 10px 15px;
        border-radius: 5px;
        background: #1f2844;
        font-style: italic;
      }
    }
  }
`;

export default function MovieDetails() {
  return (
    <StyledMovieDetails>
      <Header />
      <div className='movie-details'>
        <div className='movie-info'>
          <img
            src='https://images.pexels.com/photos/37540/food-popcorn-snack-movie-37540.jpeg?cs=srgb&dl=close-up-food-movie-37540.jpg&fm=jpg'
            alt=''
          />
          <h1>Aquaman</h1>
          <a href='#'>www.Aquaman.com</a>
          <div>
            <span>Release: January 2, 2019</span>
            <span>Runtime: 129 mins</span>
          </div>
          <p>
            Overview: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat, ipsa, qui aliquam a autem eligendi maiores itaque minima
            fugiat quibusdam, aliquid rem optio officia nulla molestias culpa!
            Quidem, in laboriosam.
          </p>
          <div className='pie-chart'>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType='Bar'
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Sales", "Expenses", "Profit"],
                ["2014", 1000, 400, 200],
                ["2015", 1170, 460, 250],
                ["2016", 660, 1120, 300],
                ["2017", 1030, 540, 350]
              ]}
              options={{
                // Material design options
                chart: {
                  title: "Some Movie Revenue",
                  subtitle: "Budget vs Profit"
                }
              }}
              // For tests
              rootProps={{ "data-testid": "2" }}
            />
          </div>
          <ul className='genres'>
            <li>Drama</li>
            <li>Science Fiction</li>
            <li>Fantasy</li>
            <li>Suspense</li>
          </ul>
        </div>
      </div>
    </StyledMovieDetails>
  );
}
