import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import EditModal from "./EditModal";
import MediaControlCard from "./MediaContolCard";
import { Button as ButtonM } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "./playlist.css";
import PlayListMenu from "./PlayListMenu";

export default function PlaylistView() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(0);

  const GetAllSongsUrl = "https://localhost:7248/GetAllSongs";
  const PostAddSongUrl = "https://localhost:7248/api/MusicApi/CreateSong";
  const UpdateSongUrl = "https://localhost:7248/api/MusicApi/UpdateSong";
  const DeleteSongByIDUrl = "https://localhost:7248/RemoveSong";

  useEffect(() => {
    axios
      .get(GetAllSongsUrl)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setReload(reload + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DeleteHandler = (id) => {
    axios
      .delete(`${DeleteSongByIDUrl}/${id}`)
      .then((result) => {
        alert("Song Deleted Successfully");
        setData(result.data);
      })
      .catch((error) => {
        console.log(`delete error:${error}`);
      });
  };

  const AddSong = (name, artist, rating, genre, lyrics, link) => {
    const obj = {
      id: 0,
      name: name,
      artist: artist,
      rating: rating,
      genre: genre,
      lyrics: lyrics,
      link: link,
    };

    axios
      .post(PostAddSongUrl, obj)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(`Error in Posting song: ${error}`);
      });
  };

  const EditSong = (id, name, artist, rating, genre, lyrics, link) => {
    const obj = {
      id: id,
      name: name,
      artist: artist,
      rating: rating,
      genre: genre,
      lyrics: lyrics,
      link: link,
    };

    console.log(obj);

    axios
      .put(UpdateSongUrl, obj)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(`Error in Updating song: ${error}`);
      });
  };

  // sorting functions
  // sort by name
  const sortByName = () => {
    const obj = [...data];
    const sorted = obj.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    // console.log(sorted);
    setData(sorted);
    // console.log(data);
  };

  //sort by rating code
  const sortByRating = () => {
    const obj = [...data];
    const sorted = obj.sort((a, b) => {
      let fa = a.rating.toLowerCase(),
        fb = b.rating.toLowerCase();

      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
    // console.log(sorted);
    setData(sorted);
    // console.log(data);
  };

  const sortByGenre = () => {
    const obj = [...data];
    const sorted = obj.sort((a, b) => {
      let fa = a.genre.toLowerCase(),
        fb = b.genre.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    // console.log(sorted);
    setData(sorted);
    // console.log(data);
  };

  const sortByArtist = () => {
    const obj = [...data];
    const sorted = obj.sort((a, b) => {
      let fa = a.artist.toLowerCase(),
        fb = b.artist.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    // console.log(sorted);
    setData(sorted);
    // console.log(data);
  };

  return (
    <div
      className="PlaylistContainer"
      style={{ display: "grid", height: "max" }}
    >
      <div
        style={{
          display: "grid",
          justifyItems: "center",
          width: "100%",
          background: "#101010",
        }}
      >
        <PlayListMenu
          AddSong={AddSong}
          sortByName={sortByName}
          sortByRating={sortByRating}
          sortByGenre={sortByGenre}
          sortByArtist={sortByArtist}
        />
        <hr />

        {/* <AddModal AddSong={AddSong} />
                <ButtonM variant='outlined' style={{ width: 'inherit'  }}
                onClick={sortByName}  >
                    Sort By Name</ButtonM>
                <ButtonM variant='outlined' style={{ width: 'inherit' }}>Sort By Genre</ButtonM>
                <ButtonM variant='outlined' style={{ width: 'inherit' }}>Sort By Rating</ButtonM>
                <ButtonM variant='outlined' style={{ width: 'inherit' }}>Sort By Artist</ButtonM> */}
      </div>
      <div
        className="plalistBlock"
        style={{
          overflow: "auto",
          maxHeight: "900px",
          backgroundColor: "#1e1e1e",
        }}
      >
        <div
          className="plalistBlockin"
          style={{
            display: "grid",
            justifyItems: "center",
            gap: "1rem",
            width: "100%",
            paddingBottom: "40px",
            paddingTop: "20px",
          }}
        >
          {data &&
            data.map((element) => {
              return (
                <div key={element.id}>
                  <MediaControlCard element={element} />
                  <div style={{ textAlign: "right" }}>
                    <EditModal element={element} EditSong={EditSong} />

                    <div style={{ display: "inline" }}>
                      <ButtonM
                        sx={{
                          color: "black",
                          width: "10px",
                          backgroundColor: "white",
                          borderRadius: "50px",
                        }}
                        variant="text"
                        onClick={() => DeleteHandler(element.id)}
                      >
                        <DeleteIcon sx={{ color: "black" }} />
                      </ButtonM>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
