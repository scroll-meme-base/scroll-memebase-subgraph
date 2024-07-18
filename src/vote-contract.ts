import {
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProposalCreated as ProposalCreatedEvent,
  ProposalExecuted as ProposalExecutedEvent,
  TopicStarted as TopicStartedEvent,
  Upgraded as UpgradedEvent,
  VoteCast as VoteCastEvent
} from "../generated/voteContract/voteContract"
import {
  Initialized,
  OwnershipTransferred,
  ProposalCreated,
  ProposalExecuted,
  TopicStarted,
  Upgraded,
  VoteCast
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

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let entity = new ProposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.params_topicId = event.params.params.topicId
  entity.params_proposalId = event.params.params.proposalId
  entity.params_name = event.params.params.name
  entity.params_symbol = event.params.params.symbol
  entity.params_duration = event.params.params.duration
  entity.params_totalSupply = event.params.params.totalSupply
  entity.params_miniStakeValue = event.params.params.miniStakeValue
  entity.params_maxStakeValue = event.params.params.maxStakeValue
  entity.params_maxParticipants = event.params.params.maxParticipants
  entity.params_whitelistIndex = event.params.params.whitelistIndex
  entity.params_proposer = event.params.params.proposer
  entity.params_useWhitelist = event.params.params.useWhitelist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalExecuted(event: ProposalExecutedEvent): void {
  let entity = new ProposalExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.topicId = event.params.topicId
  entity.proposalId = event.params.proposalId
  entity.poolId = event.params.poolId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTopicStarted(event: TopicStartedEvent): void {
  let entity = new TopicStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.topicId = event.params.topicId
  entity.name = event.params.name
  entity.deadline = event.params.deadline
  entity.topicCreator = event.params.topicCreator

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

export function handleVoteCast(event: VoteCastEvent): void {
  let entity = new VoteCast(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
