function changeImage(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
}

function calculateTotal() {
  const price = parseInt(document.getElementById('product-price').innerText);
  const quantity = parseInt(document.getElementById('quantity').value);
  const total = price * quantity;
  document.getElementById('total-price').innerText = total;
}

function addReview(event) {
  event.preventDefault();
  const name = document.getElementById('reviewer-name').value;
  const rating = document.getElementById('review-rating').value;
  const text = document.getElementById('review-text').value;

  const reviewList = document.getElementById('review-list');
  const newReview = document.createElement('li');
  newReview.innerHTML = `
      <article>
          <h3>${name}</h3>
          <p>${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
          <p>${text}</p>
      </article>
  `;
  reviewList.appendChild(newReview);

  document.getElementById('review-form').reset();
}