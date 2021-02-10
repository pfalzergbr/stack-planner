import { mount } from "@vue/test-utils";
import TheNavigation from "@/components/TheNavigation";


describe("TheNavigation.vue", () => {
  test("renders the home button", () => {
    const wrapper = mount(TheNavigation);

    expect(wrapper.get("h1").text()).toEqual("StackPlanner");
  });

  // test("renders logged out navigation, if there is no user logged in", () => {
  //   const wrapper = mount(TheNavigation, {
  //     // data() {
  //     //   return {
  //     //     user: null
  //     //   };
  //     // },
  //   });

  //   expect(wrapper.find(".navigation__links--loggedIn").exists()).toBe(false);
  //   expect(wrapper.find(".navigation__links--loggedOut").exists()).toBe(true);
  // });

  // test("renders logged in menu items if user is logged in", async () => {
  //   const wrapper = mount(TheNavigation, {
  //     data() {
  //       return {
  //         user: true,
  //       };
  //     },
  //   });


  //   expect(wrapper.find(".navigation__links--loggedIn").exists()).toBe(true);
  //   expect(wrapper.find(".navigation__links--loggedOut").exists()).toBe(false);
  // });
});
