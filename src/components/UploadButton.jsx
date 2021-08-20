function UploadButton (props) {
  function changeImageHandler(event){
    const image = event.target.files[0];
    props.changeImage(image);
  }

  return(
    <label className="label">
      Загрузить картинку
      <input type="file" name="image" className="input" accept="image/*" onChange={changeImageHandler} />
    </label>
  );
}

export default UploadButton;