const { getClosestIntersection } = require('./helper')

const input1 = `R8,U5,L5,D3
U7,R6,D4,L4`

const input2 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`

const input3 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`

describe('the getClosestIntersection', () => {
  test('getClosestIntersection', () => {
    expect(getClosestIntersection(input1)).toEqual(6)
    expect(getClosestIntersection(input2)).toEqual(159)
    expect(getClosestIntersection(input3)).toEqual(135)
  })
})