import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
// eslint-disable-next-line
export default {
    fetchEmployees: function () {
        return axios
            .get("https://randomuser.me/api/?results=25&nat=us")
            .then(res => {
                const employee = res.data.results;
                return employee.map(person => {
                    return {
                        id: person.id.value,
                        firstName: person.name.first,
                        lastName: person.name.last,
                        email: person.email,
                        phone: person.phone,
                        gender: person.gender,
                        picture: person.picture.thumbnail,
                    };
                });
            });
    }
};