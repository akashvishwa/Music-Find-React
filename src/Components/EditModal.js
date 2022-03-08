import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Button as ButtonM } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./ModalBorder.css";

export default function EditModal(props) {
  const [show, setShow] = useState(false);
  const [SongName, setSongName] = useState(props.element.name);
  const [SongArtist, setSongArtist] = useState(props.element.artist);
  const [Rating, setRating] = useState(props.element.rating);
  const [Genre, setGenre] = useState(props.element.genre);
  const [Lyrics, setLyrics] = useState(props.element.lyrics);
  const [Link, setLink] = useState(props.element.link);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.EditSong(
      props.element.id,
      SongName,
      SongArtist,
      Rating,
      Genre,
      Lyrics,
      Link
    );
  };

  return (
    <div style={{ display: "inline" }}>
      <ButtonM
        sx={{
          color: "black",
          width: "10px",
          backgroundColor: "white",
          borderRadius: "50px",
        }}
        onClick={handleShow}
      >
        <b>Ed</b>
      </ButtonM>

      <Modal show={show} onHide={handleClose}>
        <div className="gradient-border">
          <Modal.Header closeButton>
            <Modal.Title>Edit Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="SongName">
                <Form.Label>Song Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Song Name"
                  value={SongName}
                  onChange={(e) => {
                    setSongName(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ArtistName">
                <Form.Label>Artist Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Artist"
                  value={SongArtist}
                  onChange={(e) => {
                    setSongArtist(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Rating">
                <Form.Label>Rating </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="between 1 to 5"
                  value={Rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Genre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Genre"
                  value={Genre}
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Lyrics">
                <Form.Label>Lrics</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Lyrics"
                  value={Lyrics}
                  onChange={(e) => {
                    setLyrics(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Link">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link"
                  value={Link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <ButtonM
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                onClick={(e) => {
                  SubmitHandler(e);
                  handleClose();
                }}
              >
                Submit
              </ButtonM>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
