const toggleFlip = () => {
  const flipCards = document.querySelectorAll('.js-card-flip');
  console.log(flipCards);
  flipCards.forEach((card) => {
    console.log(card);
    card.addEventListener('click', (e) => {
      e.currentTarget.querySelector('.card__flip-card').classList.toggle('card__flip-card--flip')
    });
  })

}

export { toggleFlip };
