exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("employee").insert([
        {
          first_name: "Todd",
          last_name: "Jones",
          email: "todd.jones@email.com",
        },
        {
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@email.com",
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          email: "jane.doe@email.com",
          active: false,
        },
        {
          first_name: "Brian",
          last_name: "Eldridge",
          email: "brian.eldridge@email.com",
        },
        {
          first_name: "Mary",
          last_name: "Carter",
          email: "mary.carter@email.com",
          active: false,
        },
      ]);
    });
};
