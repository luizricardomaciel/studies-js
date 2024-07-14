function kangaroo(x1, v1, x2, v2) {
  let kangarooJump1 = x1 + v1;
  let kangarooJump2 = x2 + v2;

  if (x1 == x2 && v1 == v2) {
    return console.log("YES");
  }

  if ((x1 <= x2 && v1 <= v2) || (x1 >= x2 && v1 >= v2)) {
    return console.log("NO");
  }

  if (kangarooJump1 == kangarooJump2) {
    return console.log("YES");
  }

  while (kangarooJump1 > kangarooJump2) {
    if (v1 > v2) {
      return console.log("NO");
    }
    kangarooJump1 += v1;
    kangarooJump2 += v2;
    if (kangarooJump1 < kangarooJump2) {
      return console.log("NO");
    }
    if (kangarooJump1 == kangarooJump2) {
      return console.log("YES");
    }
  }

  while (kangarooJump1 < kangarooJump2) {
    if (v1 < v2) {
      return console.log("NO");
    }
    kangarooJump1 += v1;
    kangarooJump2 += v2;
    if (kangarooJump1 > kangarooJump2) {
      return console.log("NO");
    }
    if (kangarooJump1 == kangarooJump2) {
      return console.log("YES");
    }
  }
}

kangaroo(6644, 5868, 8349, 3477);
