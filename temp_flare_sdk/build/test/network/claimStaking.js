"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStakingClaimTests = runStakingClaimTests;
const node_test_1 = require("node:test");
const assert_1 = __importDefault(require("assert"));
function runStakingClaimTests(env) {
    (0, node_test_1.describe)("Staking claim tests", function () {
        let network = env.network;
        let wallets = env.getEvmWallets();
        for (let wallet of wallets) {
            (0, node_test_1.describe)(wallet.getDescription(), function () {
                return __awaiter(this, void 0, void 0, function* () {
                    (0, node_test_1.it)("get claimable amount", function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            let publicKey = yield wallet.getPublicKey();
                            yield network.getClaimableStakingReward(publicKey);
                        });
                    });
                    (0, node_test_1.it)("claim reward", function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            let publicKey = yield wallet.getPublicKey();
                            let recipient = env.getCAddress(1);
                            let wrap = Math.random() < 0.5;
                            let startBalance = wrap ? yield network.getBalanceWrappedOnC(recipient) : yield network.getBalanceOnC(recipient);
                            let reward = yield network.getClaimableStakingReward(publicKey);
                            yield network.claimStakingReward(wallet, null, recipient, wrap);
                            let endBalance = wrap ? yield network.getBalanceWrappedOnC(recipient) : yield network.getBalanceOnC(recipient);
                            assert_1.default.strictEqual(endBalance, startBalance + reward, `invalid${wrap ? " wrapped" : ""} balance after reward claiming`);
                        });
                    });
                });
            });
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhaW1TdGFraW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9uZXR3b3JrL2NsYWltU3Rha2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBLG9EQTBCQztBQTlCRCx5Q0FBeUM7QUFDekMsb0RBQTRCO0FBRzVCLFNBQWdCLG9CQUFvQixDQUFDLEdBQW9CO0lBQ3JELElBQUEsb0JBQVEsRUFBQyxxQkFBcUIsRUFBRTtRQUM1QixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFBO1FBQ3pCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUVqQyxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUEsb0JBQVEsRUFBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUU7O29CQUU5QixJQUFBLGNBQUUsRUFBQyxzQkFBc0IsRUFBRTs7NEJBQ3ZCLElBQUksU0FBUyxHQUFHLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFBOzRCQUMzQyxNQUFNLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTt3QkFDdEQsQ0FBQztxQkFBQSxDQUFDLENBQUE7b0JBRUYsSUFBQSxjQUFFLEVBQUMsY0FBYyxFQUFFOzs0QkFDZixJQUFJLFNBQVMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQTs0QkFDM0MsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQTs0QkFDOUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzRCQUNoSCxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTs0QkFDL0QsTUFBTSxPQUFPLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7NEJBQy9ELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTs0QkFDOUcsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFlBQVksR0FBRyxNQUFNLEVBQUUsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFBO3dCQUMzSCxDQUFDO3FCQUFBLENBQUMsQ0FBQTtnQkFDTixDQUFDO2FBQUEsQ0FBQyxDQUFBO1FBQ04sQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlc2NyaWJlLCBpdCB9IGZyb20gXCJub2RlOnRlc3RcIjtcclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmltcG9ydCB7IFRlc3RFbnZpcm9ubWVudCB9IGZyb20gXCIuL2VudlwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1blN0YWtpbmdDbGFpbVRlc3RzKGVudjogVGVzdEVudmlyb25tZW50KTogdm9pZCB7XHJcbiAgICBkZXNjcmliZShcIlN0YWtpbmcgY2xhaW0gdGVzdHNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuZXR3b3JrID0gZW52Lm5ldHdvcmtcclxuICAgICAgICBsZXQgd2FsbGV0cyA9IGVudi5nZXRFdm1XYWxsZXRzKClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgd2FsbGV0IG9mIHdhbGxldHMpIHtcclxuICAgICAgICAgICAgZGVzY3JpYmUod2FsbGV0LmdldERlc2NyaXB0aW9uKCksIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpdChcImdldCBjbGFpbWFibGUgYW1vdW50XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHVibGljS2V5ID0gYXdhaXQgd2FsbGV0LmdldFB1YmxpY0tleSgpXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV0d29yay5nZXRDbGFpbWFibGVTdGFraW5nUmV3YXJkKHB1YmxpY0tleSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgaXQoXCJjbGFpbSByZXdhcmRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwdWJsaWNLZXkgPSBhd2FpdCB3YWxsZXQuZ2V0UHVibGljS2V5KClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVjaXBpZW50ID0gZW52LmdldENBZGRyZXNzKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdyYXAgPSBNYXRoLnJhbmRvbSgpIDwgMC41XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0QmFsYW5jZSA9IHdyYXAgPyBhd2FpdCBuZXR3b3JrLmdldEJhbGFuY2VXcmFwcGVkT25DKHJlY2lwaWVudCkgOiBhd2FpdCBuZXR3b3JrLmdldEJhbGFuY2VPbkMocmVjaXBpZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmQgPSBhd2FpdCBuZXR3b3JrLmdldENsYWltYWJsZVN0YWtpbmdSZXdhcmQocHVibGljS2V5KSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV0d29yay5jbGFpbVN0YWtpbmdSZXdhcmQod2FsbGV0LCBudWxsLCByZWNpcGllbnQsIHdyYXApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZEJhbGFuY2UgPSB3cmFwID8gYXdhaXQgbmV0d29yay5nZXRCYWxhbmNlV3JhcHBlZE9uQyhyZWNpcGllbnQpIDogYXdhaXQgbmV0d29yay5nZXRCYWxhbmNlT25DKHJlY2lwaWVudClcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQuc3RyaWN0RXF1YWwoZW5kQmFsYW5jZSwgc3RhcnRCYWxhbmNlICsgcmV3YXJkLCBgaW52YWxpZCR7d3JhcCA/IFwiIHdyYXBwZWRcIiA6IFwiXCJ9IGJhbGFuY2UgYWZ0ZXIgcmV3YXJkIGNsYWltaW5nYClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSJdfQ==