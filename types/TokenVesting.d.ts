/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TokenVestingInterface extends ethers.utils.Interface {
  functions: {
    "FIRST_LOCK_PERCENT()": FunctionFragment;
    "PERIOD()": FunctionFragment;
    "claim()": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "end()": FunctionFragment;
    "isEnded()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVesting(address[],uint256[])": FunctionFragment;
    "start()": FunctionFragment;
    "startTime()": FunctionFragment;
    "token()": FunctionFragment;
    "totalClaimedAmount()": FunctionFragment;
    "totalRemainAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vestings(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FIRST_LOCK_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimable", values: [string]): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(functionFragment: "isEnded", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVesting",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalClaimedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRemainAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vestings", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "FIRST_LOCK_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isEnded", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVesting", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRemainAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vestings", data: BytesLike): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class TokenVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenVestingInterface;

  functions: {
    FIRST_LOCK_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isEnded(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVesting(
      users: string[],
      totalAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalClaimedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalRemainAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vestings(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        claimedAmount: BigNumber;
      }
    >;
  };

  FIRST_LOCK_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  end(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isEnded(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVesting(
    users: string[],
    totalAmounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  start(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  totalClaimedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  totalRemainAmount(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vestings(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      totalAmount: BigNumber;
      claimedAmount: BigNumber;
    }
  >;

  callStatic: {
    FIRST_LOCK_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    claimable(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<void>;

    isEnded(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setVesting(
      users: string[],
      totalAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    start(overrides?: CallOverrides): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    totalClaimedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    totalRemainAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vestings(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        claimedAmount: BigNumber;
      }
    >;
  };

  filters: {
    Claim(
      user?: string | null,
      claimedAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; claimedAmount: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    FIRST_LOCK_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isEnded(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVesting(
      users: string[],
      totalAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    totalRemainAmount(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vestings(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FIRST_LOCK_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isEnded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVesting(
      users: string[],
      totalAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    start(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalClaimedAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalRemainAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vestings(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
