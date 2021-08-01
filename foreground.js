chrome.storage.local.get(
  [
    "preferred_fc",
    "email",
    "name",
    "uid",
    "vaccination",
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "declaration",
  ],
  (result) => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const url = window.location.href;
    if (url === "https://fcbooking.cse.hku.hk/") {
      document.querySelector(`#${result.preferred_fc}`).click();
      document.querySelector(".card-body").scrollIntoView();
    } else {
      document.querySelector("#Email").value = result.email;
      document.querySelector("#FirstName").value = result.name;
      document.querySelector("#MemberID").value = result.uid;

      if (result.vaccination) {
        document.querySelector('label[for="vacine_t"]').click();
      } else {
        document.querySelector('label[for="vacine_f"]').click();
      }

      if (result.q1) {
        document.querySelector('label[for="Q1_t"]').click();
      } else {
        document.querySelector('label[for="Q1_f"]').click();
      }

      if (result.q2) {
        document.querySelector('label[for="Q2_t"]').click();
      } else {
        document.querySelector('label[for="Q2_f"]').click();
      }

      if (result.q3) {
        document.querySelector('label[for="Q3_t"]').click();
      } else {
        document.querySelector('label[for="Q3_f"]').click();
      }

      if (result.q4) {
        document.querySelector('label[for="Q4_t"]').click();
      } else {
        document.querySelector('label[for="Q4_f"]').click();
      }

      if (result.q5) {
        document.querySelector('label[for="Q5_t"]').click();
      } else {
        document.querySelector('label[for="Q5_f"]').click();
      }

      if (result.q6) {
        document.querySelector('label[for="Q6_t"]').click();
      } else {
        document.querySelector('label[for="Q6_f"]').click();
      }

      if (result.q7) {
        document.querySelector('label[for="Q7_t"]').click();
      } else {
        document.querySelector('label[for="Q7_f"]').click();
      }

      if (result.q8) {
        document.querySelector('label[for="Q8_t"]').click();
      } else {
        document.querySelector('label[for="Q8_f"]').click();
      }

      if (result.declaration) {
        document.querySelector('label[for="dataCollection"]').click();
      }

      const payment = document.createElement("div");
      payment.id = "payment";
      payment.classList.add(
        "alert",
        "alert-warning",
        "d-flex",
        "justify-content-center",
        "col-12"
      );
      payment.innerHTML = `
        <div class="row">
          <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <div class="card-body d-flex align-items-center">
                <span>
                  <h5 class="card-title">Protein 🍳</h5>
                  <p class="card-text">
                    I made GymEasy to alleviate the annoyance of jumping through many hoops to book a gym session.
                    If you find it useful, please consider adding to my protein fund!
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <a href="https://payme.hsbc/atiabbz" target="_blank">
                <img src="https://u.cubeupload.com/atiab_bz/kLsBI2.png" class="card-img-top" alt="hsbcpayme">
              </a>
              <div class="card-body d-flex justify-content-center">
                <a href="https://payme.hsbc/atiabbz" target="_blank" class="btn btn-danger">
                  HSBC PayMe
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <a href="https://qr.alipay.hk/28100401012kfekjs4lin5lx86" target="_blank">
                <img src="https://u.cubeupload.com/atiab_bz/7BSbKe.png" class="card-img-top" alt="alipayhk">
              </a>
              <div class="card-body d-flex justify-content-center">
                <a href="https://qr.alipay.hk/28100401012kfekjs4lin5lx86" target="_blank" class="btn btn-primary">
                  AlipayHK
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      document
        .querySelector("#gCaptcha")
        .insertAdjacentElement("beforebegin", payment);

      if (url.includes("SignUpPS")) {
        document.querySelector('label[for="dataCollection"]').scrollIntoView();
      } else {
        document.querySelector("#CenterID").focus();
      }
    }
  }
);
