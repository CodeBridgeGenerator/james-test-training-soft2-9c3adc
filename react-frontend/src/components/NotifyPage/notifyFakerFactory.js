
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
Tajuk: faker.lorem.sentence(""),
Venue: faker.lorem.sentence(""),
Tarikh: faker.lorem.sentence(""),
Pengajur: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
