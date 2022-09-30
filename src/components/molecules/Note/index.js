import "./style.css";


const Note = ({ title, description, deleteNote }) => (
  <>
    <div className="listElement">
      <div className="title">
        <h4>{title}</h4>
        <div>
          <button>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="description"></div>
      <p>{description}</p>
    </div>
  </>
)

export default Note;
