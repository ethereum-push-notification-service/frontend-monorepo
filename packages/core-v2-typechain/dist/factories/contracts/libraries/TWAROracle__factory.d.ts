import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { TWAROracle, TWAROracleInterface } from "../../../contracts/libraries/TWAROracle";
declare type TWAROracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TWAROracle__factory extends ContractFactory {
    constructor(...args: TWAROracleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TWAROracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TWAROracle;
    connect(signer: Signer): TWAROracle__factory;
    static readonly bytecode = "0x6080806040523461001657610734908161001c8239f35b600080fdfe604060808152600436101561001357600080fd5b6000803560e01c806362549f281461011a578063763d768d146100bf5763fe2f3f161461003f57600080fd5b346100bc57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bc576024359061ffff821682036100bc57506100a67bffffffffffffffffffffffffffffffffffffffffffffffffffffffff916004356101b9565b63ffffffff849392935193168352166020820152f35b80fd5b50903461011657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610116576024359163ffffffff831683036100bc575061010f60209260043561040f565b9051908152f35b5080fd5b5090346101165760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101165760a090610189600435600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b92949384519563ffffffff809216875216602086015261ffff938480931690860152166060840152166080820152f35b6101f281600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b935050505061ffff80911690831610156102785760009081528060205260408120805483101561024b579060209181522001547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169060e01c91565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e646578206f7574206f6620626f756e6473000000000000000000000000006044820152fd5b61ffff1661fffe81116102e95760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9061ffff80911691821561032b57160690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b8181106102e9570390565b61ffff16600181106102e9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff91821691168181106102e9570390565b63ffffffff91821691168181106102e9570390565b907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80911691821561032b57160490565b811561032b570490565b61044881600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b92509492509261ffff80921690600191828111156106a0576000908785160361069a575061047e86610479876102d6565b610318565b945b61049163ffffffff8096164261035a565b9161049c82826101b9565b989097889684916000978a8c16968789116106395750805b6105d2575b5082821691160361050a5750505050506105069392916104f96104ff927bffffffffffffffffffffffffffffffffffffffffffffffffffffffff97610396565b936103c3565b16906103d8565b1690565b61052793985090610479610521929a98959a6102d6565b906101b9565b9190816105567bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8080961696168661035a565b911694610563898761035a565b90827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211831515166102e9576105b2966105ab946105a492169061035a565b9102610405565b931661035a565b91811983116102e9576105cf936105c89161035a565b9101610405565b90565b989097878b839594951610158061062b575b1561062057505080821661061157506105fc82610365565b905b61060882856101b9565b979098806104b4565b61061a90610365565b906105fe565b9790989291926104b9565b5083891684841614156105e4565b929150506105069a9998507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9b96506104f99550610689949392506104ff9750811615600014610690575061052190610365565b9092610396565b6105219150610365565b94610480565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420656e6f75676820656c656d656e7473000000000000000000000000006044820152fdfea264697066735822122004da1d07c2d221162e771b41f178eb556f8dcac0f5631e92b811eef5dbc8029964736f6c634300080f0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TWAROracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TWAROracle;
}
export {};