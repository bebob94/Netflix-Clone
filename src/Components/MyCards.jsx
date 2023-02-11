/* eslint-disable jsx-a11y/alt-text */

import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { Modal, Button } from "react-bootstrap";

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

  openModal = async (movie) => {
    try {
      this.setState({
        modalOpen: !this.state.modalOpen,
        selectedMovie: movie,
        // selectedMovieId: movie.imdbID,
      });
      // console.log(this.state.selectedMovie);
      // console.log(movie);
      // console.log(this.state.selectedMovie);
      let response = await fetch(
        `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=e29e6245`
      );

      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          selectedMovie2: data,
          isLoading: false,
          isError: false,
        });

        // console.log(this.state.selectedMovie2);
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      alert("Fatal Error", error);

      this.setState({ isLoading: false, isError: true });
    }
  };

  closeModal = async () => {
    this.setState({ modalOpen: false, selectedMovie2: {} });
    console.log(this.state.modalOpen);
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.query.slice(0, 8).map((movie) => (
          <div
            onClick={() => this.openModal(movie)}
            key={movie.imdbID}
            style={{
              display: "inline-block",
              color: "#838383",
              textAlign: "center",
            }}
          >
            <img
              className="m-2 mb-4"
              src={movie.Poster}
              style={{
                height: "180px",
                width: "120px",
              }}
            ></img>

            <Modal show={this.state.modalOpen} onHide={this.openModal}>
              <Modal.Header>
                <Modal.Title>
                  Titolo: {this.state.selectedMovie2.Title}
                </Modal.Title>
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
            </Modal>
          </div>
        ))}
      </>
    );
  }
}
export default MyCards;

// Lidia prima di correggere il compito vorrei chiederti una cosa perchè ho provato a fare il modale,
// dopo che lo ho visto da Vincenzo, sia perchè mi piaceva l'idea sia per allenarmi, però ci sono 2 problemi
// che non capisco da dove arrivino e non so risolvere, ma sono sicuro siano cazzate facilmente risolvibili.
// 1) quando apro il modale se clicco fuori dalla card mi da un fatal error (quindi entra nel catch) e
// non capisco perchè.
// 2) quando clicco il tasto chiudi del modale poco prima di chiudersi switcha all'ultima card della sezione
// che sta ciclando, ho cercato di risolvere mettendo il secondo fatch in una nuova variabile dello state
// ma non ho risolto
