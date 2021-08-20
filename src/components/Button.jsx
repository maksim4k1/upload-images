function Button (props) {
  return(
    <label className="label">
      Загрузить картинку
      <input type="file" name="image" className="input" accept="image/*" />
    </label>
  );
}

export default Button;