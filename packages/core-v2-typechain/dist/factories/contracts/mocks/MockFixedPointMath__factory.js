"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFixedPointMath__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "add",
        outputs: [
            {
                internalType: "uint256",
                name: "result",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
        ],
        name: "exp",
        outputs: [
            {
                internalType: "int256",
                name: "result",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
        ],
        name: "ln",
        outputs: [
            {
                internalType: "int256",
                name: "result",
                type: "int256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "pow",
        outputs: [
            {
                internalType: "uint256",
                name: "result",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "sub",
        outputs: [
            {
                internalType: "uint256",
                name: "result",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x6080806040523461001657610776908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b6000803560e01c80632e4c697f1461024b578063771602f71461019c5780638e6f23531461014f578063b67d77c51461009d5763e46751e31461005757600080fd5b3461009a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009a575061009360209235610313565b9051908152f35b80fd5b50903461014b576100ad3661027b565b9190928383116100f6578284106100ca5750602093505191038152f35b806011867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b806020867f08c379a000000000000000000000000000000000000000000000000000000000606494525260076024527f454c462330303100000000000000000000000000000000000000000000000000604452fd5b5080fd5b5091346101985760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101985760209261019361009392359182136102b4565b6104ec565b8280fd5b50903461014b576101ac3661027b565b8093919319841161021f5783019283106101ca576020838351908152f35b806020857f08c379a000000000000000000000000000000000000000000000000000000000606494525260076024527f454c462330303000000000000000000000000000000000000000000000000000604452fd5b6024826011877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b50903461014b57602090610093670de0b6b3a764000061027461026d3661027b565b91906104ec565b0205610313565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60409101126102af576004359060243590565b600080fd5b156102bb57565b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024527f454c46233030360000000000000000000000000000000000000000000000000060445260646000fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffdb731c958f34d94c18113156104e657680755bf798b4a1bf1e581121561048e576503782dace9d990604e1b0574029d9dc38563c32e5c2f6dc192ee70ef65f9978af36bb17217f7d1cf79abc9e3b3989179d835ebba824c98fb31b83b2ca45c0000000000000000000000006060916b8000000000000000000000008582851b0501831d94850290036d624dcbeb5e25df590e409325888a6dcf3c27b2e487711b467e90f19320826c09791803c2923d5d9721c3da80810102851d6d29c9ad45cc0beb0a2ff097a7bab46d019dd9374d4315c8464a395fc09882017fffffffffffffffffffffffffffffffffffffffe400ce74ed9455bc9156515002860102871d6d2c06887d92262d378b9593af3534810192010102851d0193826d13aaae3ba38de06adc25ebfacc09816d022f98fbc368092c79210d196fa0816c22fcd1cffa6fa000f6e27eeca0810102851d0102831d0102901d01020105029060c3031c90565b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024527f454c46233030390000000000000000000000000000000000000000000000000060445260646000fd5b50600090565b6104f960008212156102b4565b806fffffffffffffffffffffffffffffffff1060071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff1060031b1781811c600f1060021b1781811c60031060011b1781811c60011017906060908183609f03011b609f1c917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302918080808080806c465772b2bbbb5f824b15207a30810102871d6d0388eaa27412d5aca026815d636e0102861d6d0df99ac502031bf953eff472fdcc0102851d6d13cdffb29d51d99322bdff5f22110102841d6d0a0f742023def783a307a986912e0102831d6d01920d8043ca89b5239253284e420102821d6c0b7a86d7375468fac667a0a527019181808080806c29508e458543d8aa4df2abee78810102851d6d0139601a2efabe717e604cbb48940102841d6d02247f7a7b6594320649aa03aba10102831d7fffffffffffffffffffffffffffffffffffffff73c0c716a594e00d54e3c4cbc90102821d7ffffffffffffffffffffffffffffffffffffffdc7b88c420e53a9890533129f6f0102901d7fffffffffffffffffffffffffffffffffffffff465fda27eb4d63ded474e5f83201027ffffffffffffffff5f6af8f7b3396644f18e157960000000000000000000000000105711340daa0d5f769dba1915cef59f0815a550602017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d9056fea2646970667358221220fedf10583d6381cc852b4e7e6fffb5431c5b3b745dfb3752d1564b626021319764736f6c634300080f0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockFixedPointMath__factory = /** @class */ (function (_super) {
    __extends(MockFixedPointMath__factory, _super);
    function MockFixedPointMath__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    MockFixedPointMath__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockFixedPointMath__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockFixedPointMath__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockFixedPointMath__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockFixedPointMath__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockFixedPointMath__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockFixedPointMath__factory.bytecode = _bytecode;
    MockFixedPointMath__factory.abi = _abi;
    return MockFixedPointMath__factory;
}(ethers_1.ContractFactory));
exports.MockFixedPointMath__factory = MockFixedPointMath__factory;