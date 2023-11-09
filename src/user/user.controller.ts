import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import {ApiOperation, ApiTags } from "@nestjs/swagger";


@ApiTags('user')
@Controller('users')
export class UserController{

@ApiOperation({
    description:'Description Hello World',
    summary: 'Find Users',
})
    @Get('hello-world')
    helloWorld():string{
    return 'Hello world';
    }

@ApiOperation({
        description:'Description Hello World',
        summary: 'Find Users',
    })
        @Post('hello-world')
        post():string{
        return 'Hello world';
        }
@ApiOperation({
            description:'Description Hello World',
            summary: 'Find Users',
        })
            @Delete('hello-world')
            delete():string{
            return 'Hello world';
            }
@ApiOperation({
                description:'Description Hello World',
                summary: 'Find Users',
            })
                @Put('hello-world')
                update():string{
                return 'Hello world';
                }

}