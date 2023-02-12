import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Loading from "./Loading";
import Error from "./Error";
class Search extends Component {
  state = {
    inputText: "",
    isLoading: false,
    isError: false,
    modalOpen: false,
    movie: {},
  };

  InputChange = (event) => {
    this.setState({ inputText: event.target.value });
    console.log(this.state.inputText);
  };

  fetchData = async () => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e29e6245&s=${this.state.inputText}`
      );
      console.log(res);
      const dat = await res.json();
      console.log(dat);
      //   fine prima fetch

      // inizio seconda fetch
      const firstMovie = dat.Search[0];
      let response = await fetch(
        `http://www.omdbapi.com/?i=${firstMovie.imdbID}&apikey=e29e6245`
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          modalOpen: !this.state.modalOpen,
          movie: data,
          isLoading: false,
          isError: false,
        });
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
    this.setState({ modalOpen: false, movie: {} });
    console.log(this.state.modalOpen);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Film da cercare"
          className="m-2"
          onChange={this.InputChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              this.fetchData();
            }
          }}
        />
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <Modal
          show={this.state.modalOpen}
          onHide={this.fetchData}
          key={this.state.movie.id}
        >
          <Modal.Header>
            <Modal.Title>Titolo: {this.state.movie.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.movie.Poster}
              alt={this.state.movie.Title}
              style={{ height: "180px" }}
            />
            <p>{`Genere: ${this.state.movie.Genre}`}</p>
            <p>{`Anno: ${this.state.movie.Year}`}</p>
            <p>{`Regista: ${this.state.movie.Director}`}</p>
            <p>{`Attori: ${this.state.movie.Actors}`}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Search;
// ovviamente volevo fare un extra dell'extra e non sono riuscito. Il problema e che la funzione creata mi
// crea le card nella navbar, io ivece le vorrei nel body, oltre quello ci sono errori perchè come scrivo mi
// rompe la pagina, mercoledì ho prenotato un 1 vs 1 perchè non so usare benissimo gli eventi degli onclick
// e degli on changhe per fare dei fetch

//ps) Lidiaaaaaaaaaa ci sono riuscitoooooooooooooooooooooooooooooooooo  :')

// pps) come non detto se metto un titolo generico come "the" entra nel catch dicendomi "too many results",
//  non so come risolverlo tutto il resto funziona
