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
exports.TWAROracle__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "metadata",
                type: "uint256",
            },
        ],
        name: "UpdateBuffer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "bufferId",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "timeInSeconds",
                type: "uint32",
            },
        ],
        name: "calculateAverageWeightedValue",
        outputs: [
            {
                internalType: "uint256",
                name: "averageWeightedValue",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "bufferId",
                type: "uint256",
            },
        ],
        name: "readMetadataParsed",
        outputs: [
            {
                internalType: "uint32",
                name: "minTimeStep",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "timeStamp",
                type: "uint32",
            },
            {
                internalType: "uint16",
                name: "headIndex",
                type: "uint16",
            },
            {
                internalType: "uint16",
                name: "maxLength",
                type: "uint16",
            },
            {
                internalType: "uint16",
                name: "bufferLength",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "bufferId",
                type: "uint256",
            },
            {
                internalType: "uint16",
                name: "index",
                type: "uint16",
            },
        ],
        name: "readSumAndTimeStampForPool",
        outputs: [
            {
                internalType: "uint32",
                name: "timeStamp",
                type: "uint32",
            },
            {
                internalType: "uint224",
                name: "cumulativeSum",
                type: "uint224",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x6080806040523461001657610734908161001c8239f35b600080fdfe604060808152600436101561001357600080fd5b6000803560e01c806362549f281461011a578063763d768d146100bf5763fe2f3f161461003f57600080fd5b346100bc57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bc576024359061ffff821682036100bc57506100a67bffffffffffffffffffffffffffffffffffffffffffffffffffffffff916004356101b9565b63ffffffff849392935193168352166020820152f35b80fd5b50903461011657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610116576024359163ffffffff831683036100bc575061010f60209260043561040f565b9051908152f35b5080fd5b5090346101165760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101165760a090610189600435600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b92949384519563ffffffff809216875216602086015261ffff938480931690860152166060840152166080820152f35b6101f281600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b935050505061ffff80911690831610156102785760009081528060205260408120805483101561024b579060209181522001547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169060e01c91565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e646578206f7574206f6620626f756e6473000000000000000000000000006044820152fd5b61ffff1661fffe81116102e95760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9061ffff80911691821561032b57160690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8181106102e9570390565b61ffff16600181106102e9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff91821691168181106102e9570390565b63ffffffff91821691168181106102e9570390565b907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80911691821561032b57160490565b811561032b570490565b61044881600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b92509492509261ffff80921690600191828111156106a0576000908785160361069a575061047e86610479876102d6565b610318565b945b61049163ffffffff8096164261035a565b9161049c82826101b9565b989097889684916000978a8c16968789116106395750805b6105d2575b5082821691160361050a5750505050506105069392916104f96104ff927bffffffffffffffffffffffffffffffffffffffffffffffffffffffff97610396565b936103c3565b16906103d8565b1690565b61052793985090610479610521929a98959a6102d6565b906101b9565b9190816105567bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8080961696168661035a565b911694610563898761035a565b90827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211831515166102e9576105b2966105ab946105a492169061035a565b9102610405565b931661035a565b91811983116102e9576105cf936105c89161035a565b9101610405565b90565b989097878b839594951610158061062b575b1561062057505080821661061157506105fc82610365565b905b61060882856101b9565b979098806104b4565b61061a90610365565b906105fe565b9790989291926104b9565b5083891684841614156105e4565b929150506105069a9998507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9b96506104f99550610689949392506104ff9750811615600014610690575061052190610365565b9092610396565b6105219150610365565b94610480565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420656e6f75676820656c656d656e7473000000000000000000000000006044820152fdfea264697066735822122004da1d07c2d221162e771b41f178eb556f8dcac0f5631e92b811eef5dbc8029964736f6c634300080f0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TWAROracle__factory = /** @class */ (function (_super) {
    __extends(TWAROracle__factory, _super);
    function TWAROracle__factory() {
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
    TWAROracle__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TWAROracle__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TWAROracle__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TWAROracle__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TWAROracle__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TWAROracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TWAROracle__factory.bytecode = _bytecode;
    TWAROracle__factory.abi = _abi;
    return TWAROracle__factory;
}(ethers_1.ContractFactory));
exports.TWAROracle__factory = TWAROracle__factory;