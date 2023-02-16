/* eslint-disable jsx-a11y/alt-text */

import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";
// import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyCards extends Component {
  state = {
    isLoading: true,
    isError: false,
    query: [],
    modalOpen: false,
    // selectedMovieId: "",
    selectedMovie: {},
    selectedMovie2: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e29e6245&s=${this.props.title}`
      );

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
      alert(error);

      this.setState({ isLoading: false, isError: true });
    }
  };

  // openModal = async (movie) => {
  //   try {
  //     this.setState({
  //       modalOpen: !this.state.modalOpen,
  //       selectedMovie: movie,
  //       // selectedMovieId: movie.imdbID,
  //     });
  //     // console.log(this.state.selectedMovie);
  //     // console.log(movie);
  //     // console.log(this.state.selectedMovie);
  //     let response = await fetch(
  //       `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=e29e6245`
  //     );

  //     console.log(response);
  //     if (response.ok) {
  //       let data = await response.json();
  //       console.log(data);
  //       this.setState({
  //         selectedMovie2: data,
  //         isLoading: false,
  //         isError: false,
  //       });

  //       // console.log(this.state.selectedMovie2);
  //     } else {
  //       console.log("error");
  //       this.setState({ isLoading: false, isError: true });
  //     }
  //   } catch (error) {
  //     alert(error);

  //     this.setState({ isLoading: false, isError: true });
  //   }
  // };

  // closeModal = async () => {
  //   this.setState({ modalOpen: false, selectedMovie2: {} });
  //   console.log(this.state.modalOpen);
  // };

  render() {
    return (
      <>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.query.slice(0, 8).map((movie) => (
          <div
            // onClick={() => this.openModal(movie)}

            key={movie.imdbID}
            style={{
              display: "inline-block",
              color: "#838383",
              textAlign: "center",
            }}
          >
            <Link to={`/Details/${movie.imdbID}`}>
              <img
                className="m-2 mb-4"
                src={movie.Poster}
                style={{
                  height: "180px",
                  width: "120px",
                }}
              ></img>
            </Link>
          </div>
        ))}
        {/* <Modal show={this.state.modalOpen} onHide={this.closeModal}>
          <Modal.Header>
            <Modal.Title>Titolo: {this.state.selectedMovie2.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.selectedMovie2.Poster}
              alt={this.state.selectedMovie2.Title}
              style={{ height: "180px" }}
            />
            <p>{`Genere: ${this.state.selectedMovie2.Genre}`}</p>
            <p>{`Anno: ${this.state.selectedMovie2.Year}`}</p>
            <p>{`Regista: ${this.state.selectedMovie2.Director}`}</p>
            <p>{`Attori: ${this.state.selectedMovie2.Actors}`}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
  }
}
export default MyCards;
