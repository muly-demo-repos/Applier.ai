/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Recruiter } from "./Recruiter";
import { RecruiterCountArgs } from "./RecruiterCountArgs";
import { RecruiterFindManyArgs } from "./RecruiterFindManyArgs";
import { RecruiterFindUniqueArgs } from "./RecruiterFindUniqueArgs";
import { CreateRecruiterArgs } from "./CreateRecruiterArgs";
import { UpdateRecruiterArgs } from "./UpdateRecruiterArgs";
import { DeleteRecruiterArgs } from "./DeleteRecruiterArgs";
import { RecruiterService } from "../recruiter.service";
@graphql.Resolver(() => Recruiter)
export class RecruiterResolverBase {
  constructor(protected readonly service: RecruiterService) {}

  async _recruitersMeta(
    @graphql.Args() args: RecruiterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Recruiter])
  async recruiters(
    @graphql.Args() args: RecruiterFindManyArgs
  ): Promise<Recruiter[]> {
    return this.service.recruiters(args);
  }

  @graphql.Query(() => Recruiter, { nullable: true })
  async recruiter(
    @graphql.Args() args: RecruiterFindUniqueArgs
  ): Promise<Recruiter | null> {
    const result = await this.service.recruiter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Recruiter)
  async createRecruiter(
    @graphql.Args() args: CreateRecruiterArgs
  ): Promise<Recruiter> {
    return await this.service.createRecruiter({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Recruiter)
  async updateRecruiter(
    @graphql.Args() args: UpdateRecruiterArgs
  ): Promise<Recruiter | null> {
    try {
      return await this.service.updateRecruiter({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Recruiter)
  async deleteRecruiter(
    @graphql.Args() args: DeleteRecruiterArgs
  ): Promise<Recruiter | null> {
    try {
      return await this.service.deleteRecruiter(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}