import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import { Button as ButtonM, ListItem } from "@mui/material";
import "./ModalBorder.css";

export default function (props) {
  const [show, setShow] = useState(false);
  const [SongName, setSongName] = useState("");
  const [SongArtist, setSongArtist] = useState("");
  const [Rating, setRating] = useState("");
  const [Genre, setGenre] = useState("");
  const [Lyrics, setLyrics] = useState("");
  const [Link, setLink] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.AddSong(SongName, SongArtist, Rating, Genre, Lyrics, Link);
  };

  return (
    <div>
      <ListItem
        button
        onClick={handleShow}
        style={{ color: "white", padding: 0 }}
      >
        ADD TO PLAYLIST
      </ListItem>

      <Modal show={show} onHide={handleClose}>
        <div className="gradient-border">
          <Modal.Header closeButton>
            <Modal.Title>Add Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="SongName">
                <Form.Label>Song Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Song Name"
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
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Lyrics">
                <Form.Label>Lyrics</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Lyrics"
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
                  placeholder="Youtube Link"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  SubmitHandler(e);
                  handleClose();
                }}
              >
                Submit
              </Button>
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
