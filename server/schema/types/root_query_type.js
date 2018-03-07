const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql') 
const GraphQLDate = require('graphql-custom-datetype')

const PersonType = require('./person_type')
const AttendHistoryType = require('./attend_history_type')

const mongoose = require('mongoose')
const Person = mongoose.model('person')
const AttendHistory = mongoose.model('attend-history')
const suga = require('sugar')
 
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PersonType,
      args: {
        id: {type: GraphQLID},
      },
      resolve(parentValue, {id}, req) {
        return Person.findById({_id: id})
      }
    },
    people: {
      type:  new GraphQLList(PersonType),
      args: {},
      resolve(parentValue, args, req) {
        return Person.find({})
      }
    },
    checkedIn: {
      type:  new GraphQLList(PersonType),
      args: {},
      resolve(parentValue, args, req) {
        return Person.find({isCheckedIn: true})
      }
    },
    notCheckedIn: {
      type:  new GraphQLList(PersonType),
      args: {},
      resolve(parentValue, args, req) {
        return Person.find({isCheckedIn: false})
      }
    },
    attendances: {
      type:  new GraphQLList(AttendHistoryType),
      args: {
        id: {type: GraphQLID},
        date: {type: GraphQLDate},
      },
      resolve(parentValue, {id, date}, req) {
        const findClause = {}
        if (id) findClause.id = id
        if (date) findClause.lastAttend = date
        return AttendHistory.find(findClause)
      }
    },
  }
})

module.exports = RootQueryType