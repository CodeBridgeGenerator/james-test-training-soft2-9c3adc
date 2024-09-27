
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
Latihan: faker.lorem.sentence(""),
Pelulus: faker.lorem.sentence(""),
Status: faker.lorem.sentence(""),
Komen: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
