describe("Blackjack Game", () => {
    describe("calcPoints Function", () => {
            const noAceHand = [
                {val: 5, displayVal: "5", suit: "hearts"},
                {val: 10, displayVal: "jack", suit: "hearts"},
            ];

            const oneAceSoftHand = [
                {val: 11, displayVal: "ace", suit: "hearts"},
                {val: 10, displayVal: "jack", suit: "hearts"},
                {val: 6, displayVal: "6", suit: "hearts"},
            ];

            const oneAceHardHand = [
                {val: 11, displayVal: "ace", suit: "hearts"},
                {val: 6, displayVal: "6", suit: "hearts"},
            ];

            const multipleAceSoftHand = [
                {val: 11, displayVal: "ace", suit: "hearts"},
                {val: 11, displayVal: "ace", suit: "hearts"},
                {val: 6, displayVal: "6", suit: "hearts"},
            ];

            const multipleAceHardHand = [
                {val: 11, displayVal: "ace", suit: "hearts"},
                {val: 11, displayVal: "ace", suit: "hearts"},
                {val: 6, displayVal: "6", suit: "hearts"},
            ];

            it("should return ... if no aces", () => {
                const result = calcPoints(noAceHand);
                expect(result.total).toEqual(15);
                expect(result.isSoft).toEqual(false);
            })
    })
})