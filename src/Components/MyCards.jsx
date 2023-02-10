/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";

class MyCards extends Component {
  state = {
    isLoading: true,
    isError: false,
    query: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e29e6245&s=${this.props.title}`
      );

      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ query: data.Search, isLoading: false, isError: false });

        console.log(this.state.query);
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      alert("Fatal Error", error);

      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.query.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              display: "inline-block",
              color: "#838383",
              textAlign: "center",
            }}
          >
            <img
              className="m-2 mb-4 "
              src={movie.Poster}
              style={{ height: "200px", width: "150px" }}
            ></img>
            <p className="tronca">{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        ))}
      </>
    );
  }
}
export default MyCards;
