import React, { useState, useContext } from "react";
import "./Cards.css";
import Tag from "./Tag";
import Delete from "../component/img/trash.png";
import Edit from "../component/img/write.png";
import { HandleDeleteContext, HandleEditContext } from "./Context";

function Cards({ title, tags, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedTags, setEditedTags] = useState(tags);

  const handleDelete = useContext(HandleDeleteContext);
  const handleEdit = useContext(HandleEditContext);

  const handleSave = () => {
    handleEdit(index, { task: editedTitle, tags: editedTags });
    setIsEditing(false);
  };

  const checkTag = (tag) => {
    return editedTags.some(item => item === tag);
  };

  const selectTag = (tag) => {
    if (editedTags.some(item => item === tag)) {
      const filterTags = editedTags.filter(item => item !== tag);
      setEditedTags(filterTags);
    } else {
      setEditedTags([...editedTags, tag]);
    }
  };

  return (
    <article className="task_card">
      <div className="title_card">
        {isEditing ? (
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              autoFocus
            />
            <button className="save_btn" type="submit">
              Save
            </button>
          </form>
        ) : (
          <>
            <h4 className="card_text">{title}</h4>
            <div className="edit_card" onClick={() => setIsEditing(true)}>
              <img src={Edit} className="edit_icon" alt="Edit" />
            </div>
          </>
        )}
      </div>
      <div className="card_bottom">
        {isEditing ? (
          <div className="edit_tags">
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
          </div>
        ) : (
          <div className="card_tag">
            {tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected={true} />
            ))}
          </div>
        )}
        <div className="delete_card" onClick={() => handleDelete(index)}>
          <img src={Delete} className="delete_icon" alt="Delete" />
        </div>
      </div>
    </article>
  );
}

export default Cards;