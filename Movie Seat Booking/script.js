const container = document.querySelector('.seat-section');
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
//.row .seat : showcase에 있는 seat는 빼고 실제 좌석만 포함
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value; //+붙임으로써 number로 만들 수 있다.

//Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

//update total and count
const updateSelectedCount = () => {
  const currentSelectedSeats = document.querySelectorAll(".row .seat.selected"); //현재 선택된 좌석이 nodeList 형태로 반환

  //Copy selected seats into arr
  // Map through array
  const seatsIndex = [...currentSelectedSeats].map((seat) => [...seats].indexOf(seat)); //convert node List to normal array

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex)); //현재 페이지에서 선택된 좌석인덱스를 로컬스토리지에 저장

  const selectedSeatsCount = currentSelectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
};

// Get data(selected seats & movie info) from localstorage and populate UI
function populateUI() { //로드되자마자 함수실행을 위해 함수선언문으로 작성
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")); //ls에 저장된 이미 선택된 좌석리스트

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, i) => {
      if (selectedSeats.indexOf(i) > -1) {//존재한다면,
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if(selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex; 
  }
}


//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  // e.target.selectedIndex : <select>안의 <option>의 인덱스
  setMovieData(e.target.selectedIndex, ticketPrice);
  updateSelectedCount(); //영화정보에 변화가 생겼으므로 
});

// Seat click event
container.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount(); //seat의 정보에 변화가 생겼으므로 count에 변화주는 새로운 함수 실행
  }
});

//Initial count and total set
updateSelectedCount();