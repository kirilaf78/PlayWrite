import {test as myTest} from "@playwright/test";

type afanasyeu = {
    age: number,
    email: string;
}

const myFixtureTest = myTest.extend<afanasyeu>({
    age: 46,
    email: "kir@gmail.com"
})

export const test = myFixtureTest;