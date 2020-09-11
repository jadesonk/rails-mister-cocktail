const toggleFlip = () => {
  const flipCards = document.querySelectorAll('.js-card-flip');
  console.log(flipCards);
  flipCards.forEach((card) => {
    console.log(card);
    card.addEventListener('click', (e) => {
      e.currentTarget.querySelector('.card__flip-card').classList.toggle('card__flip-card--flip')
    });

    const form = card.querySelector('.new_dose')
    form.addEventListener('click', (e) => {
      e.stopPropagation();
    })

    // const deleteButtons = card.querySelectorAll('.card-back__doses-list a')
    // deleteButtons.forEach((button) => {
    //   button.addEventListener('click', (e) => {
    //     e.stopPropagation();
    //   })
    // })

    const viewButtons = card.querySelectorAll('.card-front__content a');
    viewButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
      })
    })
  })


}

export { toggleFlip };
