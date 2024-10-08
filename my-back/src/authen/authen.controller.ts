import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, Res, Req, Headers } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { SignUpAuthenDto } from './dto/sign-up-authen.dto';
import { SignInAuthenDto } from './dto/sign-in-authen.dto';
import { AuthGuard } from './authen.guard';
import { AuthRefreshGuard } from './authen.refresh.guard';

@Controller('authen')
export class AuthenController {
  constructor(private readonly authenService: AuthenService) {}

  @Post('/sign-up')
  signUp(@Body() signUpAuthenDto: SignUpAuthenDto) {
    return this.authenService.signUp(signUpAuthenDto);
  }

  @Post('/login')
  async login(@Body() signInAuthenDto: SignInAuthenDto) {
    return this.authenService.signIn(signInAuthenDto);
  }

  @UseGuards(AuthRefreshGuard)
  @Get('/refresh')
  async refresh(@Headers() headers: any) {
    const [type, token] = headers.authorization?.split(' ') ?? [];
    return this.authenService.refresh(token);
  }

  @UseGuards(AuthGuard)
  @Get('/logout')
  async logout(@Headers() headers: any) {
    const [type, token] = headers.authorization?.split(' ') ?? [];
    this.authenService.logout(token);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  getUser(@Request() req: any) {
    return req.user;
  }
}
