class searchView {
  _parentElement = document.querySelector('.search');
  getQuerry() {
    const query = this._parentElement.querySelector(`.search__field`).value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentElement.querySelector(`.search__field`).value = ``;
  }
  addHandlerSearh(handler) {
    this._parentElement.addEventListener(`submit`, function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new searchView();
