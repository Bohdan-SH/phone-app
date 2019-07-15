import Component from './component.js';

export default class PhonesCatalog extends Component {
  constructor({
    element,
    phones = []
    // onPhoneSelected = () => { }
  }) {
    super({ element });
    this._callbackMap = {};
    this._phones = phones;
    this._render();
    // this.onPhoneSelected = onPhoneSelected;

    this.on('click', '[data-element="details-link"]', event => {
      const phoneEl = event.target.closest('[data-element="phone-element"]');
      const phoID = phoneEl.dataset.phoneId;
      // this.onPhoneSelected(phoID);
      this.emit('phone-selected', phoID);
    });
  }

  _render() {
    this._element.innerHTML = `
    <ul class="phones">
    ${this._phones
      .map(
        phone => `
      <li
      class="thumbnail"
      data-element="phone-element"
      data-phone-id=${phone.id}>
      <a 
      href="#!/phones/${phone.id}" 
      class="thumb"
      data-element="details-link">
        <img alt="${phone.name}" src="${phone.imageUrl}">
      </a>

      <div class="phones__btn-buy-wrapper">
        <a class="btn btn-success">
          Add
        </a>
      </div>

      <a href="#!/phones/${phone.id}" data-element="details-link">${
          phone.name
        }</a>
      <p>${phone.snippet}</p>
      </li>`
      )
      .join('')}
    </ul>`;
  }
}
