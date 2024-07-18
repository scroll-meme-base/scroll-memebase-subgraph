import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  PoolCreated,
  Stake,
  Unstake,
  Upgraded
} from "../generated/poolCoreContract/poolCoreContract"

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPoolCreatedEvent(
  poolId: BigInt,
  name: string,
  symbol: string,
  totalSupply: BigInt,
  poolCreater: Address,
  deadLine: BigInt,
  useWhitelist: boolean,
  miniStakeValue: BigInt,
  maxStakeValue: BigInt,
  whitelistIndex: BigInt
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalSupply",
      ethereum.Value.fromUnsignedBigInt(totalSupply)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "poolCreater",
      ethereum.Value.fromAddress(poolCreater)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deadLine",
      ethereum.Value.fromUnsignedBigInt(deadLine)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "useWhitelist",
      ethereum.Value.fromBoolean(useWhitelist)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "miniStakeValue",
      ethereum.Value.fromUnsignedBigInt(miniStakeValue)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxStakeValue",
      ethereum.Value.fromUnsignedBigInt(maxStakeValue)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistIndex",
      ethereum.Value.fromUnsignedBigInt(whitelistIndex)
    )
  )

  return poolCreatedEvent
}

export function createStakeEvent(
  staker: Address,
  poolId: BigInt,
  amount: BigInt,
  rank: BigInt,
  userScore: BigInt
): Stake {
  let stakeEvent = changetype<Stake>(newMockEvent())

  stakeEvent.parameters = new Array()

  stakeEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  stakeEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  stakeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  stakeEvent.parameters.push(
    new ethereum.EventParam("rank", ethereum.Value.fromUnsignedBigInt(rank))
  )
  stakeEvent.parameters.push(
    new ethereum.EventParam(
      "userScore",
      ethereum.Value.fromUnsignedBigInt(userScore)
    )
  )

  return stakeEvent
}

export function createUnstakeEvent(
  staker: Address,
  poolId: BigInt,
  amount: BigInt,
  fee: BigInt
): Unstake {
  let unstakeEvent = changetype<Unstake>(newMockEvent())

  unstakeEvent.parameters = new Array()

  unstakeEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return unstakeEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
