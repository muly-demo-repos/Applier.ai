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
import { RecruiterWhereInput } from "./RecruiterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecruiterOrderByInput } from "./RecruiterOrderByInput";

@ArgsType()
class RecruiterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecruiterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecruiterWhereInput, { nullable: true })
  @Type(() => RecruiterWhereInput)
  where?: RecruiterWhereInput;

  @ApiProperty({
    required: false,
    type: [RecruiterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecruiterOrderByInput], { nullable: true })
  @Type(() => RecruiterOrderByInput)
  orderBy?: Array<RecruiterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecruiterFindManyArgs as RecruiterFindManyArgs };