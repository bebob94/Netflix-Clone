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
    selectedMovie: {},
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
    this.setState({ modalOpen: true, selectedMovie: movie });
    // console.log(this.state.selectedMovie);
    console.log(movie);
  };

  closeModal = async () => {
    this.setState({ modalOpen: false });
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
              className="m-2 mb-4 "
              src={movie.Poster}
              style={{ height: "180px", width: "120px" }}
            ></img>

            <Modal show={this.state.modalOpen} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Titolo: {this.state.selectedMovie.Title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{`Genere: ${this.state.selectedMovie.Genre}`}</p>
                <p>{`Anno: ${this.state.selectedMovie.Year}`}</p>
                <p>{`Regista: ${this.state.selectedMovie.Director}`}</p>
                <p>{`Attori: ${this.state.selectedMovie.Actors}`}</p>
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
