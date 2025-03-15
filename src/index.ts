import { poweredBy } from "@/utility/powered-by";
import gsap from "gsap";

// hello world
const helloWorld = "Hello";
console.log(`${helloWorld} ${poweredBy()}`);

// gsap
gsap.to(".text", { color: "red", duration: 2 });
