/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("News Search App", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it("Check if news for India is rendered by default on dashboard", () => {
      cy.intercept("GET", `**/news?**`).as("getNews");
      cy.visit(url);

      cy.wait("@getNews");

      cy.get(".dashboard_news")
        .children()
        .should("have.length", 3);
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if news for India is rendered by default on search page", () => {
      cy.intercept("GET", `**/news?**`).as("getNews");
      cy.visit(url + "search");

      cy.wait("@getNews");

      cy.get(".news_cont")
        .children()
        .should("have.length", 3);
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if sidebar links are working properly", () => {
      cy.intercept("GET", `**/news?country_like=us`).as("getNewsUSA");
      cy.intercept("GET", `**/news?country_like=ca`).as("getNewsCanada");
      cy.intercept("GET", `**/news?country_like=pk`).as("getNewsPakistan");
      cy.visit(url);

      cy.get(".sidebar")
        .children()
        .eq(1)
        .click()
        .then(() => {
          cy.wait("@getNewsUSA")
          cy.get(".dashboard_news")
          .children()
          .should("have.length", 56);
        })
      

      cy.get(".sidebar")
      .children()
      .eq(2)
      .click()
      .then(() => {
        cy.wait("@getNewsCanada")
        cy.get(".dashboard_news")
        .children()
        .should("have.length", 4);
      })

      cy.get(".sidebar")
      .children()
      .eq(4)
      .click()
      .then(() => {
        cy.wait("@getNewsPakistan")
        cy.get(".dashboard_news")
        .children()
        .should("have.length", 1);
      })
    
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if clicking enter in search bar is redirecting to search page ", () => {
      cy.visit(url);

      cy.get(".search_box").type("tech{enter}")
      cy.url().should("eq", `${url}search`);
       
      cy.then(() => {
        acc_score += 3;
      });
    });


    it("Check if search functionality is working properly ", () => {
      cy.intercept("GET", `**/news?category_like=technology`).as("getTechnology");
      cy.intercept("GET", `**/news?category_like=general`).as("getGeneral");

      cy.visit(url);

      cy.get(".search_box").type("technology{enter}")

      cy.wait("@getTechnology")
      cy.get(".news_cont")
      .children()
      .should("have.length", 14);

      cy.get(".search_box").clear()
      cy.get(".search_box").type("general{enter}")

      cy.wait("@getGeneral")
      cy.get(".news_cont")
      .children()
      .should("have.length", 75);

       
      cy.then(() => {
        acc_score += 3;
      });
    });



    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});