import {
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PoolCreated as PoolCreatedEvent,
  Stake as StakeEvent,
  Unstake as UnstakeEvent,
  Upgraded as UpgradedEvent
} from "../generated/poolCoreContract/poolCoreContract"
import {
  Initialized,
  OwnershipTransferred,
  PoolCreated,
  Stake,
  Unstake,
  Upgraded
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new PoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.totalSupply = event.params.totalSupply
  entity.poolCreater = event.params.poolCreater
  entity.deadLine = event.params.deadLine
  entity.useWhitelist = event.params.useWhitelist
  entity.miniStakeValue = event.params.miniStakeValue
  entity.maxStakeValue = event.params.maxStakeValue
  entity.whitelistIndex = event.params.whitelistIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStake(event: StakeEvent): void {
  let entity = new Stake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.poolId = event.params.poolId
  entity.amount = event.params.amount
  entity.rank = event.params.rank
  entity.userScore = event.params.userScore

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = new Unstake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.poolId = event.params.poolId
  entity.amount = event.params.amount
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
