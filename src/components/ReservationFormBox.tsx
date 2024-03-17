import { Component } from "solid-js";

export const ReservationFormBox: Component = () => {
  return (
    <div class='reservation-form-box'>
      <div class='reservation-header-tables_form'>
        <h4>Vytvoření rezervace</h4>
        <p>Rezervace stolků</p>
      </div>
      <form method='post' action='' id='book-frm-17'>
        <div class='cart-form-box'>
          <div class='field'>
            <input
              type='text'
              id='book-frm-17-custName'
              value=''
              class='js-book-frm-custName customer-icon'
              placeholder='Jméno'
              required
            />
            <label for='book-frm-17-custName'>Jméno</label>
          </div>

          <div class='field'>
            <input
              type='text'
              id='book-frm-17-custSurname'
              value=''
              class='js-book-frm-custSurname customer-icon'
              placeholder='Příjmení'
              required
            />
            <label for='book-frm-17-custSurname'>Příjmení</label>
          </div>

          <div class='field'>
            <input
              type='tel'
              id='book-frm-17-custTelephone'
              value=''
              class='js-book-frm-custTelephone mobile-icon'
              placeholder='Telefon'
              required
            />
            <label for='book-frm-17-custTelephone'>Telefon</label>
          </div>

          <div class='field'>
            <input
              type='email'
              id='book-frm-17-custEmail'
              value=''
              class='js-book-frm-custEmail email-icon'
              placeholder='Email'
              required
            />
            <label for='book-frm-17-custEmail'>Email</label>
          </div>

          <div class='field'>
            <input
              type='time'
              id='book-frm-17-bookTimeFrom'
              value='20:00'
              class='js-book-frm-bookTimeFrom time-icon'
              placeholder='Čas příchodu'
              required
            />
            <label for='book-frm-17-bookTimeFrom'>Čas příchodu</label>
          </div>

          <div class='field'>
            <input
              type='date'
              id='book-frm-17-bookDateFrom'
              value='2024-03-10'
              class='js-book-frm-bookDateFrom calendar-icon'
              placeholder='Datum'
              required
            />
            <label for='book-frm-17-bookDateFrom'>Datum</label>
          </div>

          <div class='field'>
            <input
              type='number'
              id='book-frm-17-bookPlaces'
              value=''
              class='js-book-frm-bookPlaces people-icon'
              placeholder='Počet osob'
              required
            />
            <label for='book-frm-17-bookPlaces'>Počet osob</label>
          </div>

          <div class='field'>
            <textarea
              id='book-frm-17-bookNote'
              class='js-book-frm-bookNote pencil-icon'
              placeholder='Poznámka'
            ></textarea>
            <label for='book-frm-17-bookNote'>Poznámka</label>
          </div>
          <p>
            Rezervace se stává platnou vždy až po obdržení potvrzovacího e-mailu. Rezervace se řídí
            smluvními podmínkami a nařízením o zpracování osobních údajů podle GDPR. Odesláním
            rezervace stvrzujete svůj souhlas.{" "}
          </p>
          <input class='gradient-btn' type='submit' value=' Vyžádat rezervaci ' />
        </div>
      </form>
    </div>
  );
};
