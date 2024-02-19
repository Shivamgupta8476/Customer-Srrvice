import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';

export class AddressDto {
  @ApiProperty({ description: 'State' })
  @IsNotEmpty()
  state: string;

  @ApiProperty({ description: 'City' })
  @IsNotEmpty()
  city: string;

  @ApiProperty({ description: 'Pincode' })
  @IsNotEmpty()
  pincode: number;
}

export class CreateCustomerDto {
  @ApiProperty({ description: 'First Name' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'Last Name' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'Phone Number' })
  @IsNotEmpty()
  phoneNo: string;

  @ApiProperty({ description: 'Email Address' })
  @IsNotEmpty()
  emailId: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: [AddressDto], description: 'Billing Address' })
  @IsNotEmpty()
  billingAddress: AddressDto[];

  @ApiProperty({ type: [AddressDto], description: 'Shipping Address' })
  @IsNotEmpty()
  shippingAddress: AddressDto[];

  @ApiProperty({ description: 'Creation Date' })
  createdAt: Date;

  @ApiProperty({ description: 'Update Date' })
  updatedAt: Date;
}

export class customerLoginDto {
  @ApiProperty({ description: 'Email Address' })
  @IsNotEmpty()
  emailId: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  password: string;
}
