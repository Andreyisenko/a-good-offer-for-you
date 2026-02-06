import photo from "../../Photo/photo-kolya.jpg";
const Backdrop = () => {
  return (
    <div className="back">
      <h2 className="title3">Тут можу бути розміщена Ваша реклама </h2>
      <img className="img" src={photo} alt="kolya" />
    </div>
  );
};

export default Backdrop;
