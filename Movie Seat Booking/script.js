const container = document.querySelector("container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
//.row .seat : showcase에 있는 seat는 빼고 실제 좌석만 포함
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +(movieSelect.value); //+붙이으로써 number로 만들 수 있다.

//update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected'); //현재 선택된 좌석이 nodeList 형태로 반환
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = ticketPrice * selectedSeatsCount;
}
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount(); //count에 변화주는 새로운 함수 생성
    }
})



 
