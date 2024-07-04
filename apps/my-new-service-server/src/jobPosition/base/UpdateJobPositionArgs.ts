/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobPositionWhereUniqueInput } from "./JobPositionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JobPositionUpdateInput } from "./JobPositionUpdateInput";

@ArgsType()
class UpdateJobPositionArgs {
  @ApiProperty({
    required: true,
    type: () => JobPositionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobPositionWhereUniqueInput)
  @Field(() => JobPositionWhereUniqueInput, { nullable: false })
  where!: JobPositionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JobPositionUpdateInput,
  })
  @ValidateNested()
  @Type(() => JobPositionUpdateInput)
  @Field(() => JobPositionUpdateInput, { nullable: false })
  data!: JobPositionUpdateInput;
}

export { UpdateJobPositionArgs as UpdateJobPositionArgs };