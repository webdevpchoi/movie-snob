import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import { Chart } from "react-google-charts";

const StyledMovieDetails = styled.div`
  padding: calc(82px + 10%) 7% 0 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  .movie-details {
    background: #181f36;
    padding-bottom: 15px;
  }
  .movie-info {
    min-height: 800px;
    padding: 15px 45px 15px 20%;
    text-align: center;
    color: #fff;
    position: relative;

    /* div:first-of-type {
      margin: 15px 0;
    } */
    img {
      position: absolute;
      top: 60px;
      left: -145px;
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
      margin: 5rem 15px;
    }
    .pie-chart {
      background: ${props => props.theme.mainColor};
      height: 500px;
    }
    .pie-chart > div {
      background: #fff;
      padding: 15px;
    }
  }
  .genres {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    left: 0;
    right: 0;
    bottom: 15px;
    li {
      padding: 10px 15px;
      border-radius: 5px;
      background: #1f2844;
      font-style: italic;
      color: ${props => props.theme.accentColor};
    }
  }
`;

export default function MovieDetails({
  location: {
    state: { title, desc, budget, revenue, posterPath, releaseDate }
  }
}) {
  return (
    <div>
      <Header />
      <StyledMovieDetails>
        <div className='movie-details'>
          <div className='movie-info'>
            <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt='' />
            <h1>{title}</h1>
            <a href='#'>www.Aquaman.com</a>
            <div>
              <span>Release: January 2, 2019</span>
              <span>Runtime: 129 mins</span>
            </div>
            <p>{desc}</p>
            <div className='pie-chart'>
              <Chart
                height={"100%"}
                chartType='Bar'
                loader={<div>Loading Chart</div>}
                data={[
                  ["Year", "Budget", "Box Office Sales"],
                  [releaseDate.split("-")[0], budget, revenue]
                ]}
                options={{
                  // Material design options
                  chart: {
                    title: title,
                    subtitle: "Budget vs Box Office Sales"
                  }
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
              />
            </div>
          </div>
          <ul className='genres'>
            <li>Drama</li>
            <li>Science Fiction</li>
            <li>Fantasy</li>
            <li>Suspense</li>
          </ul>
        </div>
      </StyledMovieDetails>
    </div>
  );
}
