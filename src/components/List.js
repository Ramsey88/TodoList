import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
export default function List(props) {
  return (
    <ul style={{ fontSize: "25px" }}>
      {props.item.map((item) => (
        <li style={{ paddingBottom: "10px" }} key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{
              textDecoration: item.complete ? "line-through" : "none",
              height: "100%",
              color: "#fcedd8",
              fontFamily: "'Righteous', cursive",
              fontSize: "2rem",
            }}
          >
            {item.name}
          </span>
          {"   "}
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="xs"
            onClick={() => props.remove(item)}
          />
        </li>
      ))}
    </ul>
  );
}
