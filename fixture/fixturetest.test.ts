import {test} from "./myFixture"

test('test demo', async({age, email}) => {
    console.log(age-16, email.toUpperCase())
})