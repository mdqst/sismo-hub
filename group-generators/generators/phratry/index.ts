
import { Tags, ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

// Generated from factory.sismo.io

const generator: GroupGenerator = {
  
  generationFrequency: GenerationFrequency.Once,
  
  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
    
    const jsonListData0 = {
      "0xB2fe5c3c7231B1117Da36e7B29731693fbBc6F7A": "1",
      "0x5a869e3de0E797E4ff8e1b3436610a66eD09Bc93": "1",
      "0x7eB6dBAad0fF7FC111abD7553457CFdFf1dDE10C": "1",
    };

const dataUnion = dataOperators.Union([
      zkDeveloperContributorData0,
      jsonListData1,
    ]);

    return [
      {
        name: "phratry",
        timestamp: context.timestamp,
        description: "Phratry DAO Community Mambers Badge",
        specs: "",
        data: jsonListData0,
        data: dataUnion,
        valueType: ValueType.Score,
        tags: [Tags.Factory],
      },
    ];
  },
};

export default generator;
